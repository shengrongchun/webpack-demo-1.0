var gulp = require('gulp');


gulp.task('help',function() {
    // body...
    console.info("开发模式命令：npm run dev");
    console.info("发布模式命令：npm run build");
    console.info("热更新模式命令：npm run dev-hrm");
});