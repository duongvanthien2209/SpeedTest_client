export default () => {

    const  texts = [
        'text1',
        'text2',
        'text3'
    ];

    return texts[Math.floor(Math.random()*texts.length)];
}