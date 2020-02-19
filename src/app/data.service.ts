import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): object[] {
    let data = [
                [{id:0,type:"normal"},{id:1,type:"obstacle"},{id:2,type:"normal"},{id:3,type:"normal"},{id:3,type:"normal"},{id:4,type:"normal"},{id:5,type:"normal"},{id:6,type:"normal"},{id:7,type:"normal"},{id:8,type:"normal"}],
                [{id:0,type:"obstacle"},{id:1,type:"normal"},{id:2,type:"normal"},{id:3,type:"normal"},{id:3,type:"normal"}],
                [{id:0,type:"normal"},{id:1,type:"obstacle"},{id:2,type:"normal"},{id:3,type:"normal"},{id:3,type:"normal"}],
                [{id:0,type:"normal"},{id:1,type:"obstacle"},{id:2,type:"normal"},{id:3,type:"normal"},{id:3,type:"normal"}],
                [{id:0,type:"normal"},{id:1,type:"obstacle"},{id:2,type:"normal"},{id:3,type:"normal"},{id:3,type:"normal"}]

               ]
    return data;
  }
}
