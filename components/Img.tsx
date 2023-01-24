export const Img = ({ src, width = 400 }: { src: string; width?: number }) => {
  return (
    <img
      src={src}
      style={{ width: `${width}px`, margin: "1.5rem auto 0 auto" }}
    />
  );
};
