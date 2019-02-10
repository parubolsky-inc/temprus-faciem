module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    ejs: {
      all:{
        src: [ "./resources/page-templates/*.ejs" ],
        dest: "public/",
        expand: true,
        ext: ".html"
      }
    },
    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'rm ./public/ -rf'
      },
      copyAssets: 'mkdir -p ./public/assets  && cp ./node_modules/material-design-lite/*.min.* ./public/assets/',
      another: 'ls -al ./' // Shorthand
    }
  });

  let cmds = ['shell','ejs'];
  grunt.registerTask('default', cmds);

};
