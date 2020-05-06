import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, id: string, name: string, status: string): any {
    
    if(id){
      users = users.filter((user)=>{
        return user.id.toString().indexOf(id) !== -1;
      })
    }
    if(name){
      users = users.filter((user)=>{
        return user.name.toString().indexOf(name) !== -1;
      })
    }
    if(status){
      users = users.filter((user)=>{
        return user.status.toString().indexOf(status) !== -1;
      })
    }
    return users;

  }

}
