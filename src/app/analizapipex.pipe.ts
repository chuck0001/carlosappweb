import {Pipe, PipeTransform} from '@angular/core';



@Pipe({ name: 'Valuarte' })
export class AnalizaPipex implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
        // we'll put our functional code in here...
        console.log("valuarteX=", value);
        var newArray = []
        for (var key in value) {
            newArray.push(value[key]);
        }
        return newArray;

        //return ["das","es"];
    }
}