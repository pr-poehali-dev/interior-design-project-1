import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'Home',
      title: 'Дизайн жилых пространств',
      description: 'Создаем уютные и функциональные интерьеры для квартир и домов'
    },
    {
      icon: 'Building2',
      title: 'Коммерческие интерьеры',
      description: 'Дизайн офисов, ресторанов и торговых помещений'
    },
    {
      icon: 'Palette',
      title: 'Цветовые решения',
      description: 'Профессиональный подбор цветовой палитры и материалов'
    },
    {
      icon: 'Lightbulb',
      title: 'Освещение',
      description: 'Создание идеальной световой среды для любого пространства'
    }
  ];

  const portfolio = [
    {
      title: 'Современная гостиная',
      description: 'Минималистичный дизайн с яркими акцентами',
      image: '/img/dca3ce77-2651-4a03-8d58-120d681db6a7.jpg',
      category: 'Жилые пространства'
    },
    {
      title: 'Дизайн кухни',
      description: 'Функциональное пространство с современными решениями',
      image: '/img/f8e986d4-2ee0-48bb-b85e-bb792437e421.jpg',
      category: 'Кухни'
    },
    {
      title: 'Спальня мечты',
      description: 'Уютное и стильное место для отдыха',
      image: '/img/cceed780-bc78-4fa4-8b89-ccc605085d58.jpg',
      category: 'Спальни'
    }
  ];

  const blogPosts = [
    {
      title: 'Тренды интерьера 2024',
      excerpt: 'Разбираем главные тенденции в мире дизайна интерьеров на этот год',
      date: '15 Января 2024',
      category: 'Тренды'
    },
    {
      title: 'Как выбрать цветовую схему',
      excerpt: 'Пошаговое руководство по созданию гармоничной цветовой палитры',
      date: '12 Января 2024',
      category: 'Советы'
    },
    {
      title: 'Освещение в интерьере',
      excerpt: 'Секреты правильного освещения для создания атмосферы',
      date: '10 Января 2024',
      category: 'Освещение'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Главный дизайнер',
      experience: '8 лет опыта'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Архитектор',
      experience: '6 лет опыта'
    },
    {
      name: 'Елена Козлова',
      position: 'Декоратор',
      experience: '5 лет опыта'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-orange-500" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">INTERIOR STUDIO</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-orange-500 transition-colors">Портфолио</a>
              <a href="#blog" className="text-gray-600 hover:text-orange-500 transition-colors">Блог</a>
              <a href="#team" className="text-gray-600 hover:text-orange-500 transition-colors">Команда</a>
              <a href="#contacts" className="text-gray-600 hover:text-orange-500 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Создаем пространства <span className="text-orange-500">вашей мечты</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Современные интерьерные решения, которые отражают вашу индивидуальность и создают идеальную атмосферу для жизни
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-3 text-lg">
                Посмотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по созданию уникальных интерьеров
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="text-orange-500" size={28} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши лучшие работы говорят сами за себя
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Блог</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Делимся знаниями и вдохновением в мире дизайна
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 hover:text-orange-500 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Наша команда</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом создания уникальных интерьеров
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h3 className="text-4xl font-bold mb-6">Готовы создать интерьер мечты?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Свяжитесь с нами для бесплатной консультации. Обсудим ваш проект и создадим что-то удивительное!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="secondary" size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (495) 123-45-67
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg">
                <Icon name="Mail" className="mr-2" size={20} />
                hello@interiorstudio.ru
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Icon name="MapPin" className="text-white opacity-75" size={20} />
              <span className="text-white opacity-90">Москва, ул. Дизайнерская, 15</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Icon name="Home" className="text-orange-500" size={28} />
              <span className="text-xl font-bold">INTERIOR STUDIO</span>
            </div>
            <div className="flex space-x-6">
              <Icon name="Instagram" className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" size={24} />
              <Icon name="Facebook" className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" size={24} />
              <Icon name="Twitter" className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" size={24} />
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Interior Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}