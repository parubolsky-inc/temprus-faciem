let title,desc, prefix;

title = '123 Soul'
desc = 'descr'
prefix = 'prefname'

//let actvtes = [
  //"
  //Case Studies
  //Complete Turn Taking
  //Post It Parade
  //Group Text Reading
  //Peer Review
  //Respond, React, Reply
  //Pro-Con Grids
  //Social Annotation of Text
  //Buzz Groups
  //Quescussion
  //Think Aloud
  //Round Table
  //Debates
  //"

//]
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    ejs: {
      index:{
        options: { page : {
          title,
          desc,
          prefix
        }},
        src: [ "./resources/templates/dereviative/index.ejs" ],
        dest: "public/index.html",
        expand: false
      },
      style : {
        options: { page : {
          prefix
        }},
        src: [ "./resources/templates/dereviative/styles.css.ejs" ],
        dest: "public/assets/styles.css",
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
      clean: 'rm ./public/assets/index.ejs',
      cleancss: 'rm ./public/assets/styles.css.ejs',
    }
  });

  let cmds = ['shell','ejs'];
  grunt.registerTask('default', cmds);

};
