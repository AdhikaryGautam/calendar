export const getYearData = async (year: string) => {
  try {
    const res = await fetch(
      `https://miti.bikram.io/data/${year}-calendar.json`,
      {
        cache: "force-cache",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
