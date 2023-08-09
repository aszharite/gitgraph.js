import * as React from "react";
import { storiesOf } from "@storybook/react";
import { createGitgraph, Layout, Mode } from "@gitgraph/js";

import { createFixedHashGenerator, GraphContainer } from "../helpers";

storiesOf("flowx.ai/1. Use cases", module).add("default", () => (
  <GraphContainer>
    {(graphContainer) => {
      const gitgraph = createGitgraph(graphContainer, {
        generateCommitHash: createFixedHashGenerator(),
        layout: Layout.Gitamine,
        mode: Mode.Compact,
      });

      const master = gitgraph.branch("master");
      master.commit(); // 1
      const branch1 = gitgraph.branch("branch1");
      branch1.commit(); // 2
      master.commit(); // 3
      const branch3 = gitgraph.branch("branch3");
      master.merge("branch1"); // 4
      const branch2 = gitgraph.branch("branch2");
      branch2.commit(); // 5
      master.commit(); // 6
      master.merge("branch2");
      master.commit(); // 7
      const branch4 = gitgraph.branch("branch4");
      branch3.commit(); // 8
      master.merge("branch3"); // 9
      branch3.commit(); // 10
      master.merge("branch3"); // 11
      branch4.commit(); // 12
      branch4.commit(); // 13
      master.merge("branch4"); // 14
      branch4.commit(); // 15
    }}
  </GraphContainer>
));
