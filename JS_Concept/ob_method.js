let userDetails={
    firstName:"Janvi",
    lastName:"Limbasiya",
    courseList:[],
    website:"anuragtiwari.me",
    buyCourse:function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} course`;
    }
};

userDetails.buyCourse("FSJS");
console.log(userDetails);
console.log(userDetails.getCourseCount());