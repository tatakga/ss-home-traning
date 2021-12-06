const sass = require("node-sass");

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        style: "compressed",
        implementation: sass,
      },
      dist: {
        files: {
          "build/css/style.min.css": ["src/scss/style.scss"],
        },
      },
    },
    uglify: {
      build: {
        files: {
          "build/js/app.min.js": ["src/js/*.js"],
        },
      },
    },
    codekit: {
      files: {
        src: ["**/*.kit"],
        dest: "build",
      },
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["vendor/**"],
            dest: "build/",
            filter: "isFile",
          },
          {
            expand: true,
            cwd: "src",
            src: ["img/**"],
            dest: "build/",
            filter: "isFile",
          },
        ],
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      scss: {
        files: ["src/scss/*.scss"],
        tasks: ["sass"],
        options: { livereload: true },
      },
      uglify: {
        files: ["src/js/*.js"],
        tasks: ["uglify"],
        options: { livereload: true },
      },
      codekit: {
        files: ["**/*.kit"],
        tasks: ["codekit"],
        options: { livereload: true },
      },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: "build/.",
          hostname: "0.0.0.0",
          protocol: "http",
          livereload: true,
          open: true,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.registerTask("default", ["connect", "watch"]);
  require("load-grunt-tasks")(grunt);
};
