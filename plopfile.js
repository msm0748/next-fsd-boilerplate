module.exports = function (plop) {
  plop.setGenerator('widget', {
    description: 'Create a new widget',
    prompts: [
      {
        type: 'input',
        name: 'name', // 질문에 대한 답변은 'name' 변수에 저장됨
        message: 'What is your widget name? (e.g., main-header)',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/widgets/{{kebabCase name}}', // 생성될 위치
        base: 'plop-templates/widget', // 템플릿 파일이 있는 위치
        templateFiles: 'plop-templates/widget/**/*.hbs',
      },
    ],
  });

  // 2. 새로 추가할 Feature 생성기
  plop.setGenerator('feature', {
    description: 'Create a new feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your feature name? (e.g., create-post)',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/features/{{kebabCase name}}',
        base: 'plop-templates/feature', // feature 전용 템플릿 사용
        templateFiles: 'plop-templates/feature/**/*.hbs',
      },
    ],
  });

  // 3. Entity 생성기 (새로 추가) ✨
  plop.setGenerator('entity', {
    description: 'Create a new entity',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your entity name? (e.g., user, post)',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/entities/{{kebabCase name}}',
        base: 'plop-templates/entity', // entity 전용 템플릿 사용
        templateFiles: 'plop-templates/entity/**/*.hbs',
      },
    ],
  });
  plop.setHelper('lastOfKebab', function (text) {
    // text가 문자열이 아니면 빈 문자열 반환
    if (typeof text !== 'string') return '';

    // '-'를 기준으로 문자열을 배열로 분리
    const parts = text.split('-');

    // 배열의 마지막 요소를 반환
    return parts[parts.length - 1];
  });
};
