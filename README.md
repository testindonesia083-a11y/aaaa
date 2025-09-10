# LifeApp - Plataforma Educacional Completa

Uma plataforma educacional moderna com sistema de autenticação, integração com YouTube e interface responsiva.

## 🚀 Funcionalidades

### ✅ Sistema de Autenticação Completo
- **Login e Registro**: Formulários seguros com validação
- **Perfil do Usuário**: Gerenciamento de dados pessoais e estatísticas
- **Sessões Persistentes**: Mantém usuário logado por 30 dias
- **Proteção de Conteúdo**: Conteúdo premium protegido para usuários autenticados

### ✅ Módulos Educacionais
- **Workout**: Módulo gratuito com 7 aulas de exercícios
- **Nutrição**: Módulo premium com 12 aulas sobre alimentação saudável
- **Bônus**: Conteúdo exclusivo (em breve)

### ✅ Reprodução de Vídeos
- **Integração YouTube**: Reprodução direta dos vídeos
- **Estatísticas**: Acompanhamento de progresso do usuário
- **Reprodução Automática**: Configurável nas preferências

### ✅ Interface Moderna
- **Design Responsivo**: Funciona em desktop, tablet e mobile
- **Modo Escuro**: Alternância automática entre temas
- **Animações Suaves**: Transições e efeitos visuais
- **Acessibilidade**: Compatível com leitores de tela

## 📱 Como Usar

### Para Acessar Conteúdo Gratuito
1. Visite o site
2. Navegue pelos módulos de "Workout"
3. Assista às aulas sem necessidade de login

### Para Acessar Conteúdo Premium
1. Clique em "Entrar" no canto superior direito
2. Crie uma conta gratuita ou faça login
3. Acesse todos os módulos premium (Nutrição e Bônus)

### Funcionalidades do Perfil
- **Estatísticas Pessoais**: Vídeos assistidos, módulos concluídos, tempo total
- **Configurações**: Notificações, reprodução automática, modo escuro
- **Histórico**: Acompanhe seu progresso de aprendizado

## 🛠️ Estrutura Técnica

### Arquivos Principais
- `index.html` - Página principal da aplicação
- `style.css` - Estilos e temas (claro/escuro)
- `script.js` - Lógica principal da aplicação
- `auth.js` - Sistema de autenticação completo

### Tecnologias Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **UI**: Lucide Icons, CSS Grid/Flexbox
- **Vídeos**: YouTube Embed API
- **Armazenamento**: LocalStorage para dados do usuário
- **Design**: Sistema de design responsivo personalizado

## 🎯 Estrutura dos Módulos

### Módulo Workout (Gratuito)
7 aulas de exercícios focadas em:
- Exercícios básicos
- Técnicas de respiração
- Flexibilidade e mobilidade
- Fortalecimento muscular

### Módulo Nutrição (Premium)
12 aulas sobre alimentação saudável:
- Fundamentos da nutrição
- Planejamento de refeições
- Suplementação
- Receitas saudáveis

### Módulo Bônus (Premium)
Conteúdo exclusivo em desenvolvimento

## 🔧 Configuração e Personalização

### Temas
O sistema inclui suporte completo a modo escuro/claro:
```css
/* Personalizar cores principais */
:root {
  --primary: 142, 69%, 58%;
  --background: 0, 0%, 100%;
  --foreground: 240, 10%, 3.9%;
}

.dark {
  --background: 240, 10%, 3.9%;
  --foreground: 0, 0%, 98%;
}
```

### Adicionar Novos Vídeos
Para adicionar novos vídeos, edite o arquivo `script.js`:
```javascript
const modules = [
  {
    id: 'workout',
    title: 'Workout',
    videos: [
      {
        id: 'VIDEO_ID_YOUTUBE',
        title: 'Título da Aula',
        description: 'Descrição da aula'
      }
      // Adicione mais vídeos aqui
    ]
  }
];
```

## 📊 Sistema de Usuários

### Dados Armazenados
- **Informações Pessoais**: Nome, email, data de criação
- **Estatísticas**: Vídeos assistidos, módulos concluídos, tempo total
- **Preferências**: Notificações, reprodução automática, tema

### Segurança
- Senhas são hasheadas antes do armazenamento
- Sessões têm expiração automática
- Validação de dados em tempo real

## 🌟 Características Especiais

### Responsividade
- **Desktop**: Layout em grid com sidebar
- **Tablet**: Adaptação automática do layout
- **Mobile**: Interface otimizada para toque

### Performance
- **Carregamento Lazy**: Imagens carregam conforme necessário
- **Cache Inteligente**: Dados do usuário mantidos localmente
- **Otimização**: CSS e JS minificados para produção

### Acessibilidade
- **Navegação por Teclado**: Suporte completo
- **Leitores de Tela**: Elementos semânticos
- **Alto Contraste**: Suporte a preferências do sistema

## 📝 Notas de Desenvolvimento

### Arquitetura
A aplicação segue uma arquitetura modular:
- **auth.js**: Gerencia toda autenticação e sessões
- **script.js**: Controla interface e navegação
- **style.css**: Sistema de design completo

### Extensibilidade
O código foi estruturado para fácil expansão:
- Adicionar novos módulos é simples
- Sistema de temas é flexível
- API de autenticação pode ser facilmente integrada

## 🎉 Pronto para Uso!

A aplicação está 100% funcional e pronta para ser hospedada em qualquer servidor web estático. Todos os arquivos são autocontidos e não requerem configuração adicional.

### Deploy Rápido
1. Faça upload dos arquivos para seu servidor
2. Abra `index.html` no navegador
3. O sistema estará funcionando imediatamente!

---

**Desenvolvido com ❤️ para proporcionar a melhor experiência de aprendizado**