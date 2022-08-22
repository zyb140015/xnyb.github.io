export default {
  namespace: 'router',
  state: {},
  reducers: {
    save(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
  effects: {},
};
