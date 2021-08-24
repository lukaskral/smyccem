import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  title: string;
};

const LyricBody = ({ content, title }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1>{title}</h1>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default LyricBody;
