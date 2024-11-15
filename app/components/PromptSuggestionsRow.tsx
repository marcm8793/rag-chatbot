import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionsRow = ({ onPromptClick }) => {
  const prompts = [
    "What is the best F1 team?",
    "Who is the newest driver for Ferrari?",
    "What is the most popular F1 track?",
    "Who is the highest paid F1 driver?",
    "Who is the current Formula One World Driver's Champion?",
    "Who will be the newest driver for Ferrari?",
  ];

  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton
          key={`suggestion-${index}`}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))}
    </div>
  );
};

export default PromptSuggestionsRow;
