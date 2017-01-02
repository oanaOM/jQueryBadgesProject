$(function() {

  // your code will go here
  $.ajax({
      url: 'https://www.codeschool.com/users/OanaOM.json',
      dataType: 'jsonp',
      success: function(response) {
      console.log('response', response.courses.completed);
      addCourses(response.courses.completed);
      }
    });

    function addCourses(courses){

      var $badges = $('#badges');

      courses.forEach(function(course){
        var $course = $('<div />', {
          'class': 'course'
        }).appendTo($badges);

        $('<h3 />', {
          text: course.title
        }).appendTo($course);

        $('<img />', {
          src: course.badge
        }).appendTo($course);

        $('<a />', {
          href: course.url,
          'class': 'btn btn-primary',
          target: '_blank',
          text: 'See course'
        }).appendTo($course);

      })
    }
});
