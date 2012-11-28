$(document).ready(function(){

  // contact button functionality

  var contactButton = {

    activateButton: function(contact_button, contact_section, header_section) {
        contact_button.on('click', function(){

          if (contact_section.height() === 0) {
            contact_section.animate({
              height: '300px'
            }, 1000);
            header_section.animate({
              marginTop: '300px'
            }, 1000);
          } else {
            contact_section.animate({
              height: '1px'
            }, 1000);
            header_section.animate({
              marginTop: '0'
            }, 1000);
          }
    
        });
    },

    _init: function() {
      var contact_button = $('#trigger'),
          contact_section = $('#contact'),
          header_section = $('header');

          contactButton.activateButton(contact_button, contact_section, header_section);
    }

  };

  var projectFunctionality =  {

    countAssignments: function(assignments) {
      assignments.each(function() {
        var self = $(this);

        
        self
        // show eye icon on mouseover
        .on("mouseenter", function(e){
          e.preventDefault();
          
            self
            .find("h3 > span")
            .animate({
              opacity: 1,
              'text-indent': 0
            }, 300);
        })
        
        // hide eye icon
        .on("mouseleave", function(e){
          e.preventDefault();
          self
            .find("h3 > span")
            .animate({
              opacity: 0,
              'text-indent': '50px'
            }, 500);
        })

        .on("click", function(e){
          e.preventDefault();
          console.log("hi");
        });
      });
    },

    _init: function() {
      var assignments = $(".assignment");

      projectFunctionality.countAssignments(assignments);
    }
  };

  // Start Initialization Functions

  contactButton._init();
  projectFunctionality._init();

});