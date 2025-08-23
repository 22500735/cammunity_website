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
    { icon: Globe, number: '3', label: '지원 대학', japanese: 'サポート大学' },
    { icon: MessageCircle, number: '0+', label: '게시물 수', japanese: '投稿数' },
    { icon: Star, number: '0/5.0', label: '사용자 만족도', japanese: 'ユーザー満足度' }
  ]

  const technologyStack = {
    frontend: ['React', 'Tailwind CSS', 'Framer Motion', 'Electron'],
    backend: ['Node.js', 'Express.js', 'SQL', 'RESTful API'],
    database: ['SQL Database', 'Redis', 'Data Analytics'],
    deployment: ['Cloud Infrastructure', 'CI/CD Pipeline', 'Monitoring']
  }

  const roadmap = [
    {
      phase: 'Phase 1',
      title: '기반 구축 및 공식 런칭',
      japaneseTitle: '基盤構築と公式ローンチ',
      period: '2025년 9월 ~ 2026년 3월',
      status: 'planning',
      milestones: [
        {
          date: '2025년 9월 3일',
          title: '외부 서버 설치 완료',
          description: '서버 환경 구축, 네트워크 인프라 설정, 모니터링 시스템 구축',
          kpi: '서버 설치 및 기본 설정 완료'
        },
        {
          date: '2025년 9월 5일',
          title: '데모 버전 개발 완료',
          description: '핵심 기능 프로토타입, 내부 테스트 및 검증, 초기 버그 수정',
          kpi: '데모 버전 정상 작동'
        },
        {
          date: '2025년 9월 20일',
          title: '알파 버전 개발 완료',
          description: '서클/클럽 대표 대상 에디터 버전 출시, 핵심 기능 테스트',
          kpi: '테스트 그룹 20개 확보'
        },
        {
          date: '2025년 9월 말',
          title: '인프라 구축',
          description: '서버 인프라 설계 및 구축, 데이터 보안 체계 구축',
          kpi: '서버 안정성 99% 달성'
        },
        {
          date: '2025년 10월',
          title: '현지 시장 조사',
          description: '일본 현지 방문 및 대학 캠퍼스 매핑, 학생 대상 사용성 테스트',
          kpi: '파일럿 대학 3개 확보'
        },
        {
          date: '2026년 3월',
          title: '공식 런칭',
          description: '파일럿 대학 중심 정식 서비스 개시, 초기 사용자 온보딩',
          kpi: '활성 사용자 500명 확보'
        }
      ]
    },
    {
      phase: 'Phase 2',
      title: '시장 확장 및 수익화',
      japaneseTitle: '市場拡張と収益化',
      period: '2026년 4월 ~ 2026년 9월',
      status: 'planning',
      milestones: [
        {
          date: '2026년 4-6월',
          title: '주요 도시 확장',
          description: '도쿄, 오사카 주요 대학 서비스 확장, 지역별 맞춤 마케팅',
          kpi: '서비스 제공 대학 15개, 활성 사용자 2,500명'
        },
        {
          date: '2026년 7-9월',
          title: '수익화 모델 구축',
          description: '초기 광고주 10개사 확보, 중고서적 플랫폼 제휴',
          kpi: '월 매출 1,000만원, 광고주 10개사 확보'
        }
      ]
    },
    {
      phase: 'Phase 3',
      title: '전국 확장 및 서비스 고도화',
      japaneseTitle: '全国拡張とサービス高度化',
      period: '2026년 10월 ~ 2027년 9월',
      status: 'planning',
      milestones: [
        {
          date: '2026년 10-12월',
          title: '전국 확산',
          description: '일본 전국 주요 대학으로 서비스 확대, 지역별 현지화 전략',
          kpi: '서비스 제공 대학 50개, 활성 사용자 20,000명'
        },
        {
          date: '2027년 1-6월',
          title: '데이터 사업화',
          description: '사용자 행동 데이터 분석 플랫폼, 맞춤형 광고 상품 개발',
          kpi: '데이터 기반 매출 30% 비중, B2B 고객 5개사 확보'
        }
      ]
    },
    {
      phase: 'Phase 4',
      title: '사업 다각화 및 글로벌 확장',
      japaneseTitle: '事業多角化とグローバル拡張',
      period: '2027년 10월 이후',
      status: 'planning',
      milestones: [
        {
          date: '2027년 10월 이후',
          title: '서비스 다각화',
          description: '취업 정보, 인턴십 매칭, AI 기반 개인화 추천 시스템',
          kpi: '사용자 체류 시간 증가, 플랫폼 의존도 향상'
        },
        {
          date: '2027년 10월 이후',
          title: '글로벌 확장',
          description: '동남아시아 주요국 진출, 글로벌 파트너십 구축',
          kpi: '시장 다변화, 리스크 분산'
        }
      ]
    }
  ]

  const teamMembers = [
    {
      name: '김정민',
      japaneseName: 'キム・ジョンミン',
      role: 'CEO & Founder',
      japaneseRole: 'CEO & 創業者',
      department: '기획',
      responsibility: '사업 전략 수립 및 총괄 관리, 서비스 로드맵 기획, 기능 정의서 작성 및 사용자 요구사항 분석, 투자 유치 및 대외 업무',
      japaneseResponsibility: '事業戦略策定と総括管理、サービスロードマップ企画、機能定義書作成とユーザー要求事項分析、投資誘致と対外業務'
    },
    {
      name: '최윤성',
      japaneseName: 'チェ・ユンソン',
      role: 'CTO & Lead Developer',
      japaneseRole: 'CTO & リード開発者',
      department: '개발',
      responsibility: '풀스택 개발 총괄, 서버 아키텍처 설계 및 구축, 데이터베이스 관리 및 보안 시스템 구축, 기술 로드맵 수립',
      japaneseResponsibility: 'フルスタック開発総括、サーバーアーキテクチャ設計と構築、データベース管理とセキュリティシステム構築、技術ロードマップ策定'
    },
    {
      name: '최재훈',
      japaneseName: 'チェ・ジェフン',
      role: 'COO & Co-founder',
      japaneseRole: 'COO & 共同創業者',
      department: '운영',
      responsibility: '전략 기획 및 운영 최적화, 사용자 피드백 분석 및 서비스 개선, 데이터 분석 및 KPI 관리, 내부 운영 프로세스 구축',
      japaneseResponsibility: '戦略企画と運営最適化、ユーザーフィードバック分析とサービス改善、データ分析とKPI管理、内部運営プロセス構築'
    },
    {
      name: '松村 太郎',
      japaneseName: 'マツムラ・タロウ',
      role: 'CMO',
      japaneseRole: 'CMO',
      department: '마케팅',
      responsibility: '일본 시장 마케팅 전략 수립, 디지털 마케팅 캠페인 기획 및 실행, SNS 운영 및 브랜드 관리, 현지 파트너십 구축',
      japaneseResponsibility: '日本市場マーケティング戦略策定、デジタルマーケティングキャンペーン企画と実行、SNS運営とブランド管理、現地パートナーシップ構築'
    }
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
                    Cammunity는 일본의 대학생들을 서로 연결하는 혁신적인 커뮤니티 플랫폼입니다.
                    서로를 이해하고 이를 바탕으로 쉽게 소통할 수 있는 혁신적인 커뮤니티 플랫폼입니다.
                  </p>
                  <p className="text-base text-gray-500 mb-8 leading-relaxed">
                    キャミュニティは日本の大学生をつなぐ革新的なコミュニティプラットフォームです。
                    コミュニケーションできる革新的なコミュニティプラットフォームです。
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">각 대학 전용 폐쇄 커뮤니티 기능</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">대학 내 중고장터 기능</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">캠퍼스 및 주변 시설 맵 기능</span>
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
                          <h4 className="font-semibold text-gray-800 mb-2">언어 장벽 제거</h4>
                          <p className="text-gray-600 text-sm">
                            학생과 학생, 대학과 대학의 소통을 원활하게 합니다.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Heart className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">문화 교류 촉진</h4>
                          <p className="text-gray-600 text-sm">
                            각 대학 내에서 문화 교류를 촉진하고 학생들의 소통을 원활하게 합니다.
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 스마트 시간표 */}
                <motion.div
                  className="card hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      스마트 시간표 (Smart Timetable)
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      해당 학교의 휴강·강의실 변경 등 학사 변동 정보를 반영할 수 있는 시간 관리 도구입니다.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          친구와 시간표 공유: 공강 시간을 한눈에 확인하고, 스터디 그룹이나 약속을 편리하게 조율
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          실시간 학사 변동 정보 반영으로 정확한 시간표 관리
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 교내 인증 중고 장터 */}
                <motion.div
                  className="card hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                      <BookOpen className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      교내 인증 중고 장터 (Campus-Verified Marketplace)
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      학교 이메일 인증을 통과한 학생들만 이용할 수 있어 사기 위험을 최소화하고, 
                      캠퍼스 내에서 안전하고 편리하게 중고 교재나 물품을 거래하는 공간입니다.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          신뢰 기반 거래 환경: 학생 신분 보장으로 외부인 유입 없이 안전한 거래
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          대학생 맞춤 카테고리: 강의별 중고 교재, 전공 서적, 자취 용품 등
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          '강의명'으로 필요한 교재를 바로 검색 가능
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 책임 있는 익명 커뮤니티 */}
                <motion.div
                  className="card hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                      <MessageCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      책임 있는 익명 커뮤니티 (Responsible Anonymous Community)
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      완전한 익명 대신 '학교 인증'이라는 최소한의 소속감을 바탕으로, 
                      자유롭지만 건전한 소통이 이루어지는 대학생 전용 커뮤니티입니다.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          주제별 전문 게시판: 강의 평가, 취업·진로, 동아리 홍보 등
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          안전한 소통 환경: 실시간 모니터링 및 신고 처리 시스템
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          '책임 있는 익명성' 보장으로 건전한 커뮤니티 문화 조성
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 스마트 캠퍼스 맵 */}
                <motion.div
                  className="card hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      스마트 캠퍼스 맵 (Smart Campus Map)
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      캠퍼스 내 길찾기는 물론, 시간표·중고장터 등 앱의 다른 기능과 유기적으로 연동되어 
                      역동적인 캠퍼스 라이프를 지원하는 인터랙티브 지도입니다.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          동아리 및 학생들이 필요한 물건에 대한 정보를 캠퍼스 맵을 통해 확인 가능
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          시간표, 중고장터 등 다른 기능과 유기적 연동
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 기능 통합 설명 */}
              <motion.div
                className="mt-20 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    통합된 캠퍼스 경험
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    모든 기능이 서로 연결되어 하나의 앱에서 완벽한 캠퍼스 라이프를 경험할 수 있습니다. 
                    시간표를 확인하고, 친구와 공강 시간을 맞춰 스터디를 계획하고, 필요한 교재를 중고장터에서 찾고, 
                    캠퍼스 맵으로 약속 장소를 찾아가는 모든 과정이 자연스럽게 연결됩니다.
                  </p>
                  <p className="text-sm text-gray-500">
                    すべての機能が相互に接続され、1つのアプリで完璧なキャンパスライフを体験できます。
                  </p>
                </div>
              </motion.div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(technologyStack).map(([category, techs], index) => (
                  <motion.div
                    key={category}
                    className="card hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                        {category === 'frontend' ? '프론트엔드' :
                         category === 'backend' ? '백엔드' :
                         category === 'database' ? '데이터베이스' : '배포'}
                      </h3>
                      <div className="space-y-3">
                        {techs.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-gray-700 font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">기술적 특징</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">React 기반 프론트엔드</h4>
                    <p className="text-gray-600 text-sm">
                      컴포넌트 기반 아키텍처로 유지보수성과 확장성을 극대화했습니다. 
                      Tailwind CSS와 Framer Motion을 활용하여 현대적이고 부드러운 사용자 경험을 제공합니다.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Node.js 백엔드</h4>
                    <p className="text-gray-600 text-sm">
                      비동기 처리와 높은 성능을 제공하는 Node.js를 기반으로 구축되었습니다. 
                      RESTful API 설계로 프론트엔드와의 효율적인 통신을 보장합니다.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Electron 데스크톱 앱</h4>
                    <p className="text-gray-600 text-sm">
                      웹 기술을 활용하여 크로스 플랫폼 데스크톱 애플리케이션을 제공합니다. 
                      네이티브 앱과 동일한 성능과 사용자 경험을 제공합니다.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">SQL 데이터베이스</h4>
                    <p className="text-gray-600 text-sm">
                      관계형 데이터베이스를 활용하여 데이터의 일관성과 무결성을 보장합니다. 
                      복잡한 쿼리와 트랜잭션 처리를 효율적으로 수행합니다.
                    </p>
                  </div>
                </div>
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

              <div className="space-y-16">
                {roadmap.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">{phase.phase}</h3>
                          <h4 className="text-xl font-semibold text-gray-800 mb-1">{phase.title}</h4>
                          <p className="text-gray-500">{phase.japaneseTitle}</p>
                        </div>
                        <span className="text-lg font-medium text-gray-600 bg-white px-4 py-2 rounded-full">
                          {phase.period}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {phase.milestones.map((milestone, mIndex) => (
                          <div key={mIndex} className="bg-white rounded-lg p-6 shadow-md">
                            <div className="flex items-start space-x-3 mb-3">
                              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-gray-800 mb-1">{milestone.date}</h5>
                                <h6 className="font-medium text-primary mb-2">{milestone.title}</h6>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                            <div className="bg-gray-50 rounded p-3">
                              <span className="text-xs font-medium text-gray-500">KPI:</span>
                              <p className="text-sm text-gray-700 mt-1">{milestone.kpi}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="card hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl font-bold">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {member.japaneseName}
                          </p>
                          <p className="text-lg font-medium text-primary mb-2">
                            {member.role}
                          </p>
                          <p className="text-sm text-gray-500 mb-3">
                            {member.japaneseRole}
                          </p>
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                              {member.department}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2 leading-relaxed text-sm">
                            {member.responsibility}
                          </p>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {member.japaneseResponsibility}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">팀 구성 현황</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">4</div>
                      <div className="text-gray-600">총 팀원</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">4</div>
                      <div className="text-gray-600">확정된 역할</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">2+</div>
                      <div className="text-gray-600">추가 모집 중</div>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-6">
                    UI/UX Designer와 CFO 역할을 담당할 인재를 추가로 모집하고 있습니다.
                  </p>
                </div>
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
                日本の大学生をつなぐ革新的なコミュニティに一緒に参加して
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
