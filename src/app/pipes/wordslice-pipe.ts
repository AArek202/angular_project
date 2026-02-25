import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordslice',
})
export class WordslicePipe implements PipeTransform {

  transform(value: string, showed: number = 3): string {
    if (!value) return '';
    const words = value.split(" ");
    const truncated = words.slice(0, showed).join(" ");
    return truncated;
}

}
