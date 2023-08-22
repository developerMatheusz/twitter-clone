import EditableImage from "../EditableImage";

type CoverProps = {
  src?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  editable?: boolean;
};

const Cover = ({ src, onChange, editable }: CoverProps) => {
  return (
    <EditableImage
      type="cover"
      src={src!}
      onChange={onChange!}
      editable={editable}
      className="h-36"
    />
  );
};

export default Cover;
