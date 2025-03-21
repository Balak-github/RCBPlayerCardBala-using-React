export interface Player {
  id: number;
  name: string;
  role: string;
  nationality: string;
  imageUrl: string;
  stats: {
    matches: number;
    runs?: number;
    wickets?: number;
    average?: number;
    strikeRate?: number;
    economyRate?: number;
  };
}

export const players: Player[] = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    nationality: "Indian",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/vk%20%282%29_0.png?itok=Is3MWocj",
    stats: {
      matches: 237,
      runs: 7263,
      average: 37.24,
      strikeRate: 130.02
    }
  },
  {
    id: 2,
    name: "Rajat Patidar",
    role: "Batsman (Captain)",
    nationality: "India",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/Rajat%20%281%29_0.png?itok=T3zbHJxN",
    stats: {
      matches: 130,
      runs: 3283,
      average: 34.63,
      strikeRate: 132.75
    }
  },
  {
    id: 3,
    name: "Philp Salt",
    role: "Wicket Keeper",
    nationality: "England",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/salt%20%282%29_0.png?itok=ZEsoqmrP",
    stats: {
      matches: 21,
      runs: 653,
      average: 34.37,
      strikeRate: 175.54
    }
  },
  {
    id: 4,
    name: "Liam Livingstone",
    role: "All-Rounder",
    nationality: "England",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/livingstone.png?itok=OKH7Uiv8",
    stats: {
      matches: 140,
      runs: 3453,
      average: 36.93,
      strikeRate: 142.75
    }
  },
  {
    id: 5,
    name: "Tim David",
    role: "All-Rounder",
    nationality: "Australia",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/david_0.png?itok=8nRMvk9p",
    stats: {
      matches: 120,
      runs: 1983,
      average: 29.63,
      strikeRate: 122.75
    }
  },
  {
    id: 6,
    name: "Devdutt Padikkal",
    role: "Batsman",
    nationality: "India",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/padikkal%20%281%29.png?itok=3lQ43T7x",
    stats: {
      matches: 60,
      runs: 1559,
      average: 25.15,
      strikeRate: 123.15
    }
  },
  {
    id: 7,
    name: "Krunal Pandya",
    role: "All-Rounder",
    nationality: "India",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/krunal_0.png?itok=kfuF_oaj",
    stats: {
      matches: 127,
      runs: 1647,
      average: 21.96,
      strikeRate: 132.83
    }
  },
  {
    id: 8,
    name: "Bhuvneshwar Kumar",
    role: "Bowler",
    nationality: "Indian",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/bhuvi%20%282%29.png?itok=_f7OHbIw",
    stats: {
      matches: 176,
      wickets: 181,
      economyRate: 7.56
    }
  },
  {
    id: 9,
    name: "Lungi Ngidi",
    role: "Bowler",
    nationality: "South Africa",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/lungi%20%282%29_0.png?itok=WnZdnYlR",
    stats: {
      matches: 14,
      wickets: 25,
      economyRate: 8.3
    }
  },
  {
    id: 10,
    name: "Swapnil Singh",
    role: "Bowler",
    nationality: "Indian",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/swapnil%20%281%29_0.png?itok=h_Oia8o-",
    stats: {
      matches: 14,
      wickets: 7,
      economyRate: 8.9
    }
  },
  {
    id: 11,
    name: "Nuwan Thushara",
    role: "Bowler",
    nationality: "Sri Lanka",
    imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/nuwan.png?itok=bY1cyFxY",
    stats: {
      matches: 7,
      wickets: 8,
      economyRate: 9.88
    }
  }
];