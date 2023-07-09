export function createPages({limit, allLaunchers, sortedPages}) {
    if (!allLaunchers) return null;

    const totalPages = Math.ceil(allLaunchers.length / limit);
    
    for (let i = 1; i <= totalPages; i++) {
      const startIndex = (i - 1) * limit;
      const endIndex = i * limit;
      sortedPages[`page_${i}`] = [...allLaunchers].slice(startIndex, endIndex);
    }
  }