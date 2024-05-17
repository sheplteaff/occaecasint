@effects({ gasUsed })
const myFunction = async () => {
  const gasUsedValue = await gasUsed();
  console.log(`Gas used: ${gasUsedValue}`);
};
