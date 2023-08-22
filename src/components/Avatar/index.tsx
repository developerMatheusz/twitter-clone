import EditableImage from "../EditableImage";

type AvatarProps = {
  src: string;
  big?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  editable?: boolean;
};

const Avatar = ({ src, big, onChange, editable = false }: AvatarProps) => {
  const sizeClass = big ? "w-24 h-24" : "w-12 h-12";

  return (
    <div className="rounded-full overflow-hidden max-h-24 object-cover">
      <EditableImage
        type="image"
        src={src!}
        onChange={onChange!}
        editable={editable}
        className={`${sizeClass} rounded-full overflow-hidden`}
      />
    </div>
  );
};

export default Avatar;
