const Title = ({ heading, paragraph, textAlign = 'center', headingColor = 'gray-900' }) => {
  // Define alignment styles based on prop
  const alignmentClass =
    textAlign === 'center'
      ? 'items-center text-center'
      : textAlign === 'right'
      ? 'items-end text-right'
      : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignmentClass} my-10 px-4`}>
      <h1 className={`text-3xl md:text-4xl font-bold text-${headingColor} mb-4`}>
        {heading}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        {paragraph}
      </p>
    </div>
  );
};

export default Title