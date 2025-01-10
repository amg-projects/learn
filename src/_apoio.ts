// Tipos usados para o marucs testar seus exercícios, não altere os tipos desse bloco para não atrapalhar seus exercícios
type TestCase<TInput, TOutput> = {
    input: TInput;
    expectedOutput: TOutput;
};

type TestFunction<TInput, TOutput> = (input: TInput) => TOutput;

export function runTests<TInput, TOutput>(
    exerciseName: string,
    testCases: TestCase<TInput, TOutput>[],
    testFunction: TestFunction<TInput, TOutput>
) {
    try {

        const messages: string[] = []
        for (const { input, expectedOutput } of testCases) {
            const inputJson = JSON.stringify(input);
            const result = testFunction(JSON.parse(inputJson));

            const resultStr = typeof result === 'object' ? JSON.stringify(result) : (result as any).toString();
            const expectedStr = typeof expectedOutput === 'object' ? JSON.stringify(expectedOutput) : (expectedOutput as any).toString();

            const isCorrect = resultStr === expectedStr;
            messages.push(isCorrect ? `✅ ${exerciseName}: \`${inputJson}\` → \`${expectedStr}\`` : `❌: ${exerciseName}: \`${inputJson}\` → Era para ser \`${expectedStr}\`, mas deu: \`${resultStr}\``) // ✅
        };
        console.log(messages.join('\n'));
    } catch (error) {
        console.error(error);
    }
}