import { DefaultBar } from "@/components/Navbar/defaultBar";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const markdownText = `# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

\`\`\`bash
pip install foobar
\`\`\`

## Usage

\`\`\`python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
\`\`\`

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
`;


export function CreateReadme() {
  const [input, setInput] = useState(markdownText);

  return (
    <div className="pt-20 h-screen">
      <DefaultBar />
      <div className="flex h-[calc(100vh-5rem)]">
        <div className=" flex-1 p-4 flex flex-col h-full">
            <div className="py-2 text-green-700 font-bold underline-offset-2 underline text-xl">
                Markdown Input :
            </div>
          <textarea
            className=" border-2 border-gray-400 bg-white w-full h-full resize-none p-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className=" bg-gray-300 flex-1 p-4 overflow-y-auto h-full">
            <div className="prose prose-custom max-w-none">
                <ReactMarkdown>
                    {input}
                </ReactMarkdown>
            </div>
        </div>
      </div>
    </div>
  );
}


