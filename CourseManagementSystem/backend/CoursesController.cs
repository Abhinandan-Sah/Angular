using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CoursesController : ControllerBase
{
    private static readonly List<Course> Courses = new();
    private static bool _isSeeded;
    private static readonly object SeedLock = new();

    public static void InitializeSeedData()
    {
        if (_isSeeded)
        {
            return;
        }

        lock (SeedLock)
        {
            if (_isSeeded)
            {
                return;
            }

            Courses.Clear();
            Courses.AddRange(new[]
            {
                new Course { Id = 1, Title = "Introduction to C#", Instructor = "Alice Johnson", Duration = 20 },
                new Course { Id = 2, Title = "ASP.NET Core Web API", Instructor = "Bob Smith", Duration = 25 },
                new Course { Id = 3, Title = "Angular Fundamentals", Instructor = "Carol Davis", Duration = 18 }
            });

            _isSeeded = true;
        }
    }

    [HttpGet]
    public ActionResult<IEnumerable<Course>> GetAllCourses()
    {
        return Ok(Courses);
    }

    [HttpGet("{id:int}")]
    public ActionResult<Course> GetCourseById(int id)
    {
        var course = Courses.FirstOrDefault(c => c.Id == id);

        if (course is null)
        {
            return NotFound();
        }

        return Ok(course);
    }

    [HttpPost]
    public ActionResult<Course> AddCourse([FromBody] Course course)
    {
        if (string.IsNullOrWhiteSpace(course.Title) || string.IsNullOrWhiteSpace(course.Instructor) || course.Duration <= 0)
        {
            return BadRequest("Title, Instructor, and a positive Duration are required.");
        }

        course.Id = Courses.Count == 0 ? 1 : Courses.Max(c => c.Id) + 1;
        Courses.Add(course);

        return CreatedAtAction(nameof(GetCourseById), new { id = course.Id }, course);
    }

    [HttpDelete("{id:int}")]
    public IActionResult DeleteCourse(int id)
    {
        var course = Courses.FirstOrDefault(c => c.Id == id);

        if (course is null)
        {
            return NotFound();
        }

        Courses.Remove(course);
        return NoContent();
    }
}
