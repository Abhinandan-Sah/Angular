import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(dataSize: number, dataType: string='KB'): string {
    return (dataSize/1024).toFixed(2) + dataType;
  }

}
