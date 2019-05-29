const doStory = (story, index) => {
  return `
    {
          id: ${index},
          text: \`${story.teksti}\`,
          picSrc: '@/../static/images/${story.kuva}'
    }`;
};
const doStories = tekstitJaKuvat => {
  return `${tekstitJaKuvat.map((s, i) => doStory(s, i)).join(",")}`;
};

const generateStory = (nimi, tekstitJaKuvat) => {
  if (tekstitJaKuvat === undefined) {
    return ``;
  }
  return `export default  {
        name: '${nimi}',
        stories: [
            ${doStories(tekstitJaKuvat)}
        ]
    }`;
};

export default generateStory;
