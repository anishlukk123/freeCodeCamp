// TODO: eventually this should all flow from the curriculum service, since it
// defines the top-level structure of the curriculum.
import { Languages } from './i18n';

// all superblocks
export enum SuperBlocks {
  RespWebDesignNew = '2022/responsive-web-design',
  RespWebDesign = 'responsive-web-design',
  JsAlgoDataStruct = 'javascript-algorithms-and-data-structures',
  JsAlgoDataStructNew = 'javascript-algorithms-and-data-structures-v8',
  FrontEndDevLibs = 'front-end-development-libraries',
  DataVis = 'data-visualization',
  RelationalDb = 'relational-database',
  BackEndDevApis = 'back-end-development-and-apis',
  QualityAssurance = 'quality-assurance',
  SciCompPy = 'scientific-computing-with-python',
  DataAnalysisPy = 'data-analysis-with-python',
  InfoSec = 'information-security',
  MachineLearningPy = 'machine-learning-with-python',
  CodingInterviewPrep = 'coding-interview-prep',
  TheOdinProject = 'the-odin-project',
  ProjectEuler = 'project-euler',
  CollegeAlgebraPy = 'college-algebra-with-python',
  FoundationalCSharp = 'foundational-c-sharp-with-microsoft',
  FullStackDeveloper = 'full-stack-developer',
  A2English = 'a2-english-for-developers',
  B1English = 'b1-english-for-developers',
  A2Spanish = 'a2-professional-spanish',
  A2Chinese = 'a2-professional-chinese',
  RosettaCode = 'rosetta-code',
  PythonForEverybody = 'python-for-everybody',
  DevPlayground = 'dev-playground'
}

/*
 * SuperBlockStages.Upcoming = SHOW_UPCOMING_CHANGES === 'true'
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 *
 * SuperBlockStages.Next = deployed, but only shown if the Growthbook feature
 * is enabled.
 *
 */
export enum SuperBlockStage {
  Core,
  English,
  Professional,
  Extra,
  Legacy,
  Upcoming,
  Next
}

const defaultStageOrder = [
  SuperBlockStage.Core,
  SuperBlockStage.English,
  SuperBlockStage.Extra,
  SuperBlockStage.Legacy,
  SuperBlockStage.Professional,
  SuperBlockStage.Next
];

export function getStageOrder({
  showUpcomingChanges
}: Config): SuperBlockStage[] {
  const stageOrder = [...defaultStageOrder];

  if (showUpcomingChanges) stageOrder.push(SuperBlockStage.Upcoming);
  return stageOrder;
}

export type StageMap = {
  [key in SuperBlockStage]: SuperBlocks[];
};

// Groups of superblocks in learn map. This should include all superblocks.
export const superBlockStages: StageMap = {
  [SuperBlockStage.Core]: [SuperBlocks.FullStackDeveloper],

  [SuperBlockStage.English]: [SuperBlocks.A2English, SuperBlocks.B1English],
  [SuperBlockStage.Professional]: [SuperBlocks.FoundationalCSharp],
  [SuperBlockStage.Extra]: [
    SuperBlocks.TheOdinProject,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.RosettaCode
  ],
  [SuperBlockStage.Legacy]: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.PythonForEverybody
  ],
  [SuperBlockStage.Next]: [],
  [SuperBlockStage.Upcoming]: [
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.DevPlayground
  ]
};

Object.freeze(superBlockStages);

type NotAuditedSuperBlocks = {
  [key in Languages]: SuperBlocks[];
};

// when a superBlock is audited, remove it from its language below
// when adding a new language, add all (not audited) superblocks to the object
export const notAuditedSuperBlocks: NotAuditedSuperBlocks = {
  [Languages.English]: [],
  [Languages.Espanol]: [
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Chinese]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.ChineseTraditional]: [
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Italian]: [
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Portuguese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Ukrainian]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese
  ],
  [Languages.Japanese]: [
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese
  ],
  [Languages.German]: [
    SuperBlocks.RelationalDb,
    SuperBlocks.QualityAssurance,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Swahili]: [
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.RespWebDesign,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody
  ],
  [Languages.Korean]: [
    SuperBlocks.RespWebDesignNew,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.TheOdinProject,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.FullStackDeveloper,
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.PythonForEverybody,
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.RosettaCode
  ]
};

Object.freeze(notAuditedSuperBlocks);

export const chapterBasedSuperBlocks = [SuperBlocks.FullStackDeveloper];
Object.freeze(chapterBasedSuperBlocks);

type Config = {
  showUpcomingChanges: boolean;
};

export function generateSuperBlockList(config: Config): SuperBlocks[] {
  return getStageOrder(config)
    .map(stage => superBlockStages[stage])
    .flat();
}

export function getAuditedSuperBlocks({
  language = 'english'
}: {
  language: string;
}): SuperBlocks[] {
  if (!Object.prototype.hasOwnProperty.call(notAuditedSuperBlocks, language)) {
    throw Error(`'${language}' key not found in 'notAuditedSuperBlocks'`);
  }

  // To find the audited superblocks, we need to start with all superblocks.
  const flatSuperBlockMap = generateSuperBlockList({
    showUpcomingChanges: true
  });
  const auditedSuperBlocks = flatSuperBlockMap.filter(
    superBlock =>
      !notAuditedSuperBlocks[language as Languages].includes(superBlock)
  );
  return auditedSuperBlocks;
}
