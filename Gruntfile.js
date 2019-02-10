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
        command: 'rm ./public/ -rf && mkdir -p ./public/assets'
      },
      //copyAssets: './resources/templates/' + templateName + '/'
      copyBAssets: 'cp ./node_modules/material-design-lite/*.min.* ./public/assets/',
      copyAssets: 'cp ./resources/templates/dereviative/* ./public/assets -R',
      clean: 'rm ./public/assets/index.ejs'
    }
  });

  let cmds = ['shell','ejs'];
  grunt.registerTask('default', cmds);

};
