const fs = require('fs');
const strings = require('../../../pkg/strings');

const storeFile = async (req, res) => {
    
    
    let public = req.body.public && req.body.public === 'true' ? true : false;

    const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/pjpeg',
        'image/png',
        'image/gif'
    ];

    if(!allowedTypes.includes(req.files.document.mimetype)) {
        return res.status(400).send('Bad Request: Bad Type');
    }

    const allowedSize = 10 * 1024 * 1024;

    if(allowedSize < req.files.document.size) {
        return res.status(400).send('Bad Request: File Too Large');
    }

    let dir = public ? 'public' : req.user.uid;

    // check if user directory exists, if not create
    let userDir = `${__dirname}/../../../uploads`;
    if(!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir);
    }

    let fileName = `${strings.makeID(8)}_${req.files.document.name.replace(/ /g, '_')}`;
    let filePath = `${userDir}/${fileName}`;

    try {
        await req.files.document.mv(filePath);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }

    res.status(201).send({
        filename: fileName
    });
};

const getFile = (req, res) => {
    let userDir = `${__dirname}/../../../uploads`;
    let fileName = req.params.fid;
    let filePath = `${userDir}/${fileName}`;

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File Not Found');
    }

    res.download(filePath);
};

module.exports = {
    storeFile,
    getFile,
};