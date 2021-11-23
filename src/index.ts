import { Transformer } from '@parcel/plugin';


export default new Transformer({
  async transform({ asset }) {
    const content = await asset.getCode();

    asset.type = 'js';
    asset.setCode(`
      import { gql } from 'graphql-tag';
      
      export default gql(${JSON.stringify(content)});
    `);

    return [asset];
  },
});
