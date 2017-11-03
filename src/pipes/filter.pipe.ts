import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        
        if (!items || !filter) return items;

        if(filter == 'open'){
            return items.filter(function(obj) { return obj.status == false; });
        }else{
            return items.filter(function(obj) { return obj.status == true; });
        }
        
    }
}