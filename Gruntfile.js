'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// define assemble
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	var helpers = require('handlebars-helpers');
	// define swag helpers
	var helpers = require('swag');

	// define prettify
	grunt.loadNpmTasks('grunt-prettify');
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);


	grunt.initConfig({
		jshint: {
			all: ['app/assets/**/*.js'],
			options: {
				jshintrc: true
			}
		},
		// configurable paths
		path: {
			app: 'app',
			build: 'build',
			temp: '.tmp'
		},
		// watch files for a change and run tasks if something changes
		watch: {
			// less: compile LESS into CSS
			less: {
				files: ['<%= path.app %>/assets/styles/**/*.less'],
				tasks: ['less:server']
			},
			// assemble template files and output HTML
			assemble: {
				files: ['<%= path.app %>/templates/{,*/}*.hbs'],
				tasks: ['assemble:server','prettify:server'],
				helpers: 'handlebars-helpers'
			},
			// copy files into its directories
			copy: {
				files: [
					'<%= path.app %>/assets/favicon/{,*/}*.*',
					'<%= path.app %>/assets/images/{,*/}*.*',
					'<%= path.app %>/assets/fonts/{,*/}*.*',
					'<%= path.app %>/assets/scripts/{,*/}*.*',
				],
				tasks: ['copy:server']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= path.temp %>/etc/designs/foxtel/{,*/}*.css',
					'<%= path.app %>/templates/{,*/}*.hbs',
					'<%= path.app %>/assets/images/{,*/}*'
				]
			}
		},
		// connect to local server
		connect: {
			options: {
				port: 9004,
				open: true,
				livereload: 35731,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'<%= path.temp %>',
						'<%= path.app %>'
					]
				}
			},
			build: {
				options: {
					open: true,
					base: '<%= path.build %>'
				}
			}
		},
		// assemble paths
		assemble: {
			options: {
				flatten: true,
				layout: 'default.hbs',
				layoutdir: '<%= path.app %>/templates/layouts',
				assets: 'build/images',
				partials: ['<%= path.app %>/templates/partials/*.hbs']
			},
			server: {
				files: {
					'<%= path.temp %>/': ['<%= path.app %>/templates/pages/*.hbs']
				}
			},
			build: {
				files: {
					'<%= path.build %>/': ['<%= path.app %>/templates/pages/*.hbs']
				}
			}
		},
		// Code prettification
		prettify: {
			options: {
				indent: 1,
				indent_char: '	',
				brace_style: 'end-expand',
				unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u', 'b', 'pre', 'code', 'span', 'strong', 'head']
			},
			server: {
				expand: true,
				cwd: '<%= path.temp %>/',
				ext: '.html',
				src: ['*.html'],
				dest: '<%= path.temp %>/'
			},
			build: {
				expand: true,
				cwd: '<%= path.build %>/',
				ext: '.html',
				src: ['*.html'],
				dest: '<%= path.build %>/'
			}
		},
		clean: {
			build: {
				files: [{
					dot: true,
					src: [
						'<%= path.temp %>',
						'<%= path.build %>'
					]
				}]
			},
			server: '<%= path.temp %>'
		},
		// Compile Less
		less: {
			options: {
				paths: ["<%= path.app %>/assets/styles"],
				'strictImports': true,
				'syncImport': true
			},
			server: {
				files: {
					'<%= path.temp %>/etc/designs/foxtel/styles/website-upgrades-foxtel-styles.css': ['<%= path.app %>/assets/styles/website-upgrades-foxtel-styles.less']
					
				}
			},
			build: {
				options: {
					compress: false
				},
				files: {
					'<%= path.build %>/etc/designs/foxtel/styles/website-upgrades-foxtel-styles.css': ['<%= path.app %>/assets/styles/website-upgrades-foxtel-styles.less']
				}
			}
		},
		// Put files not handled in other tasks here
		copy: {
			server: {
				files: [
					// Copy All Assets
					{expand: true, flatten: false, cwd: '<%= path.app %>/assets/favicon', src: ['**'], dest: '<%= path.temp %>/etc/designs/foxtel/'},
					{expand: true, flatten: false, cwd: '<%= path.app %>/assets/assets-existing', src: ['**'], dest: '<%= path.temp %>/etc/designs/foxtel/'},
					{expand: true, flatten: false, cwd: '<%= path.app %>/assets/scripts/', src: ['*.js'], dest: '<%= path.temp %>/etc/designs/foxtel/scripts'}
				]
			},
			build: {
				files: [
					// Copy All Assets
					{expand: true, flatten: false, cwd: '<%= path.app %>/assets/favicon', src: ['**'], dest: '<%= path.temp %>/etc/designs/foxtel/'},
					{expand: true, flatten: false, cwd: '<%= path.app %>/assets/assets-existing', src: ['**'], dest: '<%= path.temp %>/etc/designs/foxtel/'},
					{expand: true, flatten: false, cwd: '<%= path.app %>/assets/scripts/', src: ['*.js'], dest: '<%= path.temp %>/etc/designs/foxtel/scripts'}
				]
			}
		},
		concurrent: {
			server: [
				'less:server', // converts LESS to CSS
				'assemble:server', // assembles HTML files
				'copy:server', // copies folders and files from /app to /.tmp
			]
		}
	});

	// Task server: Assemble project and run it in a browser
	grunt.registerTask('server', function (target) {
		if (target === 'build') {
			return grunt.task.run(['build', 'connect:build:keepalive']);
		}

		grunt.task.run([
			'clean:server', // removes temporary directory .tmp
			'concurrent:server', // runs these tasks concurrently to save time
			'prettify:server', // make html prettier
			'connect:livereload', // connects to server
			'watch' // watch directories for changes
		]);
	});

	// Task build: Assemble project and build it for production
	grunt.registerTask('build', [
		'clean:build',
		'less:build',
		'assemble:build',
		'prettify:build',
		'copy:build'
	]);

	grunt.registerTask('wipe', [
		'clean'
	]);

	grunt.registerTask('default', [
		'server'
	]);
};
