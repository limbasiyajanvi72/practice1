var d = new Date;

dformatone = [d.getFullYear(),d.getMonth()+1,d.getDate(),].join('-')+' '+
              [d.getHours(),d.getMinutes()].join(':');
console.log("First fomar:",dformatone);

dformattwo = [d.getDate(),d.getMonth()+1,d.getFullYear(),].join('-')+' '+
              [d.getHours(),d.getMinutes()].join(':');
console.log("Second format:",dformattwo);

dformatthree = [d.getDate(),d.getMonth()+1,d.getFullYear(),].join('/')+' '+
              [d.getHours(),d.getMinutes()].join(':');
console.log("Third format: ",dformatthree);   