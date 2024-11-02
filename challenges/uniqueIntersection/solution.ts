export function intersection1(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []

  for (const n of nums1) {
    if (nums2.includes(n) && !result.includes(n)) {
      result.push(n)
    }
  }

  return result
};

export function intersection2(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  return [...set1].filter((n) => set2.has(n))
};
