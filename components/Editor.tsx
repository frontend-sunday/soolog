'use client';
/**
 * TODO
 * 이미지 업로드
 * https://velog.io/@cwdll/react-md-editor-%EA%B3%B5%EB%B6%80#%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80
 */

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default), { ssr: false });

export default function App() {
  const titleRef = useRef(null);
  const [value, setValue] = React.useState<string>();

  return (
    <div className="p-4">
      <div className="mb-4">
        <input type="text" ref={titleRef} className="h-16  block text-xl " placeholder="제목" />
      </div>
      <div className="container">
        <MDEditor
          value={value}
          height={500}
          onChange={setValue}
          previewOptions={{
            /**
             * 이렇게 사용해야 하이라이트가 됨
             * https://github.com/uiwjs/react-md-editor/issues/335#issuecomment-1084523247
             * */

            rehypePlugins: [
              [
                rehypeSanitize,
                {
                  ...defaultSchema,
                  attributes: {
                    ...defaultSchema.attributes,
                    span: [
                      //@ts-expect-error 몰라걍써
                      ...(defaultSchema.attributes.span || []),
                      // List of all allowed tokens:
                      ['className'],
                    ],
                    code: [['className']],
                  },
                },
              ],
            ],
          }}
        />
      </div>
    </div>
  );
}
