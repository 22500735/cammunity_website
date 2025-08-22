import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Users, Globe, MessageCircle, BookOpen, Award, Zap, Shield, Heart, Star, TrendingUp, Clock, Target, CheckCircle } from 'lucide-react'

const CammunityProject = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedFeature, setSelectedFeature] = useState(null)

  const tabs = [
    { id: 'overview', label: '개요', japanese: '概要' },
    { id: 'features', label: '주요 기능', japanese: '主要機能' },
    { id: 'technology', label: '기술', japanese: '技術' },
    { id: 'roadmap', label: '로드맵', japanese: 'ロードマップ' },
    { id: 'team', label: '팀', japanese: 'チーム' }
  ]

  const stats = [
    { icon: Users, number: '0+', label: '활성 사용자', japanese: 'アクティブユーザー' },
    { icon: Globe, number: '1', label: '지원 대학', japanese: 'サポート大学' },
    { icon: MessageCircle, number: '0+', label: '게시물 수', japanese: '翻訳リクエスト' },
    { icon: Star, number: '0/5.0', label: '사용자 만족도', japanese: 'ユーザー満足度' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/30" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white text-5xl font-bold">C</span>
              </motion.div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
              <span className="gradient-text">Cammunity</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              일본의 대학생들을 서로 연결하는 혁신적인 커뮤니티 플랫폼
            </p>
            <p className="text-xl text-gray-500 mb-8">
              日本の大学生をつなぐ革新的なコミュニティプラットフォーム
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>데모 보기</span>
              </button>
              <button className="btn-outline text-lg px-8 py-4 flex items-center space-x-2">
                <span>더 알아보기</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.japanese}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <span className="block">{tab.label}</span>
                <span className="text-xs opacity-75">{tab.japanese}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="min-h-screen">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className="py-20 bg-gray-50">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    프로젝트 개요
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Cammunity는 일본의 대학생들을 서로 연결하는 혁신적인 커뮤니티 플랫폼입니다. 서로 이해하고 이를 바탕으로 사용자들이 쉽게 소통할 수 있는 환경을 제공합니다.
                  </p>
                  <p className="text-base text-gray-500 mb-8 leading-relaxed">
                    キャミュニティは日本の大学生をつなぐ革新的なコミュニティプラットフォームです。文化的差異を理解し、それを基にユーザーが簡単にコミュニケーションできる環境を提供します。
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">각 대학 전용 폐쇠 커뮤니티 기능</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">대학 내 중고 장터 기능</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">캠퍼스 및 주변 시설 맵 기능능</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">보안 및 개인정보 보호</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                      프로젝트 목표
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">각 대학 전용 폐쇠 커뮤니티 기능</h4>
                          <p className="text-gray-600 text-sm">
                            각 대학 전용 폐쇠 커뮤니티 기능을 제공합니다.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Heart className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">대학 내 맵 기능</h4>
                          <p className="text-gray-600 text-sm">
                            대학 내 맵 기능능을 제공합니다.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">지속적 성장</h4>
                          <p className="text-gray-600 text-sm">
                            사용자 피드백을 반영하여 지속적으로 개선하고 발전합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <section className="py-20 bg-white">
            <div className="container-custom">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  주요 기능
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Cammunity의 핵심 기능들을 살펴보세요
                </p>
              </motion.div>

              <div className="text-center text-gray-600">
                <p>주요 기능 탭 내용이 여기에 표시됩니다.</p>
                <p>각 대학 전용 폐쇠 커뮤니티 기능, 대학 내 중고 장터 기능, 캠퍼스 및 주변 시설 맵 기능능, 보안 및 개인정보 보호 등의 기능을 상세히 소개합니다.</p>
              </div>
            </div>
          </section>
        )}

        {/* Technology Tab */}
        {activeTab === 'technology' && (
          <section className="py-20 bg-gray-50">
            <div className="container-custom">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  기술 스택
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  최신 기술을 활용하여 구축된 Cammunity 플랫폼
                </p>
              </motion.div>

              <div className="text-center text-gray-600">
                <p>기술 스택 탭 내용이 여기에 표시됩니다.</p>
                <p>React, Node.js, 서버, 보안 기술 등을 상세히 소개합니다.</p>
              </div>
            </div>
          </section>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <section className="py-20 bg-white">
            <div className="container-custom">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  개발 로드맵
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Cammunity의 개발 과정과 향후 계획
                </p>
              </motion.div>

              <div className="text-center text-gray-600">
                <p>로드맵 탭 내용이 여기에 표시됩니다.</p>
                <p>개발 단계별 진행 상황과 향후 계획을 시각적으로 보여줍니다.</p>
              </div>
            </div>
          </section>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <section className="py-20 bg-gray-50">
            <div className="container-custom">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  개발 팀
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Cammunity 프로젝트를 이끌어가는 전문가들
                </p>
              </motion.div>

              <div className="text-center text-gray-600">
                <p>팀 탭 내용이 여기에 표시됩니다.</p>
                <p>프로젝트를 담당하는 팀원들의 역할과 전문 분야를 소개합니다.</p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Cammunity에 참여하세요
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                일본의 대학생들을 서로 연결하는 혁신적인 커뮤니티에 함께 참여하여
                <br />
                새로운 문화적 경험을 만들어보세요
              </p>
              <p className="text-lg text-white/80 mb-8">
                日本と韓国をつなぐ革新的なコミュニティに一緒に参加して
                <br />
                新しい文化的体験を作ってみませんか
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-secondary bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4">
                  지금 시작하기
                </button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
                  문의하기
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CammunityProject
