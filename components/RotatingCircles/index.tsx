function RotatingCircles() {
  return (
    <>
      <div className="absolute z-10 top-4 left-4 w-96 sm:w-80 md:w-72 lg:w-64 h-96 sm:h-80 md:h-72 lg:h-64 border-2 border-dashed border-blue-100 rounded-full animate-rotate" />
      <div className="absolute z-10 bottom-20 right-20 w-64 sm:w-56 md:w-48 lg:w-40 h-64 sm:h-56 md:h-48 lg:h-40 border-2 border-dashed border-blue-100 rounded-full animate-rotate" />
    </>
  );
}

export default RotatingCircles;
