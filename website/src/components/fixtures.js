
import React from "react";
import { 
  LoginOutlined,
  FileProtectOutlined,
  EyeOutlined,
  BlockOutlined,
  ApiOutlined,
  LikeOutlined,
  BuildOutlined,
} from '@ant-design/icons';

export const featureList = [
    {
      title: 'Explicit business-logic',
      Svg: EyeOutlined,
      description: (
        <>
          Архитектуру <b>легко осваивать</b>, поскольку она состоит из доменных модулей
        </>
      ),
    },
    {
      title: 'Adaptability',
      Svg: LoginOutlined,
      description: (
        <>
          Компоненты архитектуры можно <b>гибко заменять, добавлять под новые условия</b>
        </>
      ),
    },
    {
      title: 'Tech debt & Refactoring',
      Svg: FileProtectOutlined,
      description: (
        <>
          Каждый модуль можно <b>независимо</b> модифицировать / переписать <b>без сайд-эффектов</b>
        </>
      ),
    },
    {
      title: 'Explicit sharing',
      Svg: BuildOutlined,
      description: (
        <>
          Сохраняется баланс между <b>DRY и локальной кастомизацией</b>
        </>
      ),
    },
  ];

  
export const conceptsList = [
  {
    title: 'Public API',
    Svg: ApiOutlined,
    description: (
      <>
        Каждый модуль должен иметь на верхнем уровне декларацию <b>своего публичного API</b>
      </>
    ),
  },
  {
    title: 'Isolation',
    Svg: BlockOutlined,
    description: (
      <>
        Модуль не должен <b>зависеть напрямую</b> от других модулей того же слоя или вышележаших слоев
      </>
    ),
  },
  {
    title: 'Needs driven',
    Svg: LikeOutlined,
    description: (
      <>
        Ориентирование <b>на потребности бизнеса и пользователя</b>
      </>
    ),
  },
];
