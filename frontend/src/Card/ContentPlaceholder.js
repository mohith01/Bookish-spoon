import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";

function createMarkup(text) {
  return {__html: text};
}

export const ContentPlaceholder = React.memo((ingredient, content) => {
  console.log(ingredient.ingredient)
  const inverted = useInvertedScale();
  console.log(ingredient);
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      
      <p>Ingredients Used: {ingredient.ingredient} </p>
      <div dangerouslySetInnerHTML={createMarkup(ingredient.content)} />
      {/* <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} /> */}
    </motion.div>
  );
});
