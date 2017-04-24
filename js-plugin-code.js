var str = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
    str += data;
});

process.stdin.on('end', function() {
    try {
        config = JSON.parse(process.argv[2]);
    } catch (e) {
        config = null;
    }
    process.chdir(process.argv[3]);
    process.stdout.write('processed data');
});
