import _ from 'lodash';

export function paginate (movies , currentPage , pageSize){
   const startIndex = (currentPage -1 ) * pageSize; 
   return  _(movies).slice(startIndex).take(pageSize).value();
}