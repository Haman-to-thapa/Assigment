export interface Transaction {
  id: string;
  type: 'donation' | 'redemption' | 'earning';
  title: string;
  date: string;
  points: number;
  description: string;
  icon: string;
}