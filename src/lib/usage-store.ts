// 간단한 인메모리 저장소
type UsageStore = {
  [key: string]: {
    count: number;
    lastReset: Date;
  };
};

class UsageTracker {
  private store: UsageStore = {};

  private getDayKey(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  increment(identifier: string): number {
    const today = new Date();
    const dayKey = this.getDayKey(today);

    if (
      !this.store[identifier] ||
      this.getDayKey(this.store[identifier].lastReset) !== dayKey
    ) {
      this.store[identifier] = {
        count: 0,
        lastReset: today,
      };
    }

    this.store[identifier].count += 1;
    return this.store[identifier].count;
  }

  getCount(identifier: string): number {
    const today = new Date();
    const dayKey = this.getDayKey(today);

    if (
      !this.store[identifier] ||
      this.getDayKey(this.store[identifier].lastReset) !== dayKey
    ) {
      return 0;
    }

    return this.store[identifier].count;
  }
}

export const usageTracker = new UsageTracker();
