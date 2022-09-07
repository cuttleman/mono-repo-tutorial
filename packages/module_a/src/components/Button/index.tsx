interface Props {
  text: string;
  text2: string;
  text3: string;
}

const Button = ({ text, text2, text3 }: Props) => {
  return (
    <button>
      {text} {text2} {text3}
    </button>
  );
};

export default Button;
