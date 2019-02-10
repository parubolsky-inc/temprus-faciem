let title,desc, prefix;

title = 'title'
desc = 'descr'
prefix = 'prefname'
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    ejs: {
      all:{
        options: { page : {
          title,
          desc,
          prefix
        }},
        src: [ "./resources/templates/dereviative/index.ejs" ],
        dest: "public/index.html",
        expand: false
      }
    },
    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'rm ./public/ -rf && mkdir -p ./public'
      },
    }
  });

  let cmds = ['shell','ejs'];
  grunt.registerTask('default', cmds);

};
