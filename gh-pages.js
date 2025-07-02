const ghpages = require('gh-pages');

const argv = require('minimist')(process.argv.slice(2));
// node script.js --env=dev -p 8080
// { _: [], env: 'dev', p: 8080 }

const src = argv.src; // = 'week1/homework';   // 要推送的原始資料夾
const dest = argv.dest; // = 'week1'; // 推到 gh-pages 中的 week1 資料夾中

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(src, {
    user: {
        name: 'Github Action',
        email: 'github-action@example.com'
    },
    branch: 'gh-pages',
    repo: 'https://github.com/andrew781026/hexschool-2025-summer.git',
    dest // 推到 gh-pages 分支中的 [dest] 資料夾中
}, function(err) {
    console.log(err);
});
